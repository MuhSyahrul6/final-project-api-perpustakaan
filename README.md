# Final Project API Perpustakaan

## Overview
 LibraryKu Merupakan sebuah Sistem API Perpustakaan yang dirancang sebagai solusi komprehensif untuk memenuhi kebutuhan manajemen perpustakaan modern.

### How To Use ?
* jalankan perintah berikut 

```bash
npm install
```
* setelah itu copy file `.env.example` pada terminal dengan cara :

```bash
cp .env.example .env
```
* kemudian isikan configurasi pada file `.env` silahkan disesuaikan sendiri
```
NODE_ENV=development

APP_PORT = 3000
APP_URL = http://localhost

# database
DB_HOST=127.0.0.1
DB_DRIVER=mysql
DB_NAME=perpustakaan
DB_USER=root
DB_PASS=""
DB_PORT=3306

```
* Kemudian jalankan script dibawah ini untuk melakukan migration ke database : 
```
npx sequelize-cli db:migrate 
```
* Kemudian jalankan script dibawah ini untuk Menambahkan Akun Admin untuk Akses Semua Fitur 
```
npx sequelize-cli db:seed:all 
```
* Coba jalankan menggunakan script dibawah ini : 
```
npm run start
```
* kemudian akses url dibawah ini menggunakan http request app favorit kalian :
```
http://localhost:3000/
```
# Dokumentasi API Dengan POSTMAN 
[Link Dokumentasi](https://documenter.getpostman.com/view/29733389/2s9YeK39Wq)
# Resources 
* ExpressJs
* Sequelize
* Nodemon
* mysql2
# Group Members
* Muhammad Syahrul Romadhon
* Muhammad Daffa Yuza
* Madwa Razami
* Nia Damayanti
* Ahmad Syaeful Hidayat
