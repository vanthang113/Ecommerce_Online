#!/bin/sh
# wait-for-db.sh

set -e

host="$1"
user="$2"
password="$3"
shift 3
cmd="$@"

until mysql -h "$host" -u "$user" -p"$password" -e 'SELECT 1;' > /dev/null 2>&1; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec $cmd