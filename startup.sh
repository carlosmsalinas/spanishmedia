#!/bin/sh
set -eu
cd /workspace
node scripts/preview.mjs stop || true

ready() {
  curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/
}

# 8080 in hex is 1F90. True when something is already listening.
listening() {
  grep -q ':1F90 ' /proc/net/tcp /proc/net/tcp6 2>/dev/null
}

if ! ready && ! listening; then
  npm run dev >>/tmp/app-startup.log 2>&1 &
fi

i=0
while [ "$i" -lt 40 ]; do
  if ready; then
    break
  fi
  i=$((i + 1))
  sleep 0.5
done

if ! ready; then
  echo "preview did not come up" >&2
  exit 1
fi

# One watcher. Restarts only after the server has failed twice, and never
# if something is already holding the port.
if [ -f /tmp/preview-watch.pid ] && kill -0 "$(cat /tmp/preview-watch.pid)" 2>/dev/null; then
  exit 0
fi

(
  misses=0
  while true; do
    if ready; then
      misses=0
    else
      misses=$((misses + 1))
      if [ "$misses" -ge 2 ] && ! listening; then
        npm run dev >>/tmp/app-startup.log 2>&1 &
        misses=0
        sleep 8
      fi
    fi
    sleep 5
  done
) >/tmp/preview-watch.log 2>&1 &
echo $! >/tmp/preview-watch.pid
exit 0
