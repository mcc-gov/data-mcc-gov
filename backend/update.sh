export TDSVER=7.0

python tables_export.py
sudo cp *.csv /var/www/raw/selection

python index.py > index.json

sudo cp index.json /var/www/raw/

cd ../data-mcc-gov/

git pull

sudo cp web/*.html /var/www/web/
sudo cp web/*.html /var/www/

cd ../backend/
