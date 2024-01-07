# Từ điển tiếng anh chuyên ngành công nghệ thông tin

[Front end (winform) link](https://github.com/quanghuybest2k2/DictionaryAppForIT)

## Frontend: Reactjs, Backend: Laravel, Database: Mysql

## Hướng dẫn cài đặt

### Yêu cầu môi trường

[composer](https://getcomposer.org/download)

[NodeJS](https://nodejs.org/en)

[Laragon](https://laragon.org/download)

### Cài đặt Database

#### Mở Laragon nhấn `chạy`

#### truy cập url `http://localhost/phpmyadmin/` và tạo database mới đặt tên là `englishdictionary`

### Cài đặt dictionary-server

#### Gõ các lệnh:

### `cp .env.example .env`

### vào `.env` vừa tạo sửa `DB_DATABASE=englishdictionary`

### Gõ lệnh `composer install` nếu không được thì gõ `composer update`

### Gõ lệnh `php artisan key:generate`

### Gõ lệnh `php artisan migrate:fresh --seed`

### Để chạy dự án `php artisan serve`

### Cài đặt dictionary-admin

#### cài đặt yarn bằng lệnh (nếu chưa có):

### `npm install --global yarn`

### Sau đó gõ lệnh:

### `yarn install`

#### Để chạy dự án

### `yarn start`

### Docs API

`http://127.0.0.1:8000/api/docs`
