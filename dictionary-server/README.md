# Server Dictionary App For IT

## Xây dựng api cho từ điển tiếng anh chuyên ngành công nghệ thông tin

[Front end (winform) link](https://github.com/quanghuybest2k2/DictionaryAppForIT)

# Hướng dẫn cài đặt

## Cách 1: với `docker`

[Tải docker](https://www.docker.com/products/docker-desktop)
Nhớ cài thêm wsl2 `https://learn.microsoft.com/en-us/windows/wsl/install-manual` (download wsl2 ở step 4)

Cài đặt và chạy `docker`

### Mở dự án với vs code và chạy:

Bước 1:

```shell
docker compose up -d --build
```

Bước 2:

## Sau khi chạy xong bước 1, gõ các lệnh:

```shell
docker exec -it api bash
```

```shell
cp .env.example .env
```

```shell
composer install --ignore-platform-reqs
```

```shell
php artisan key:generate
```

```shell
php artisan migrate:fresh --seed
```

## Sau khi chạy xong thì truy cập:

Truy cập `http://localhost`

PHPMyAdmin: `http://localhost:82`

## Cách 2: với `local`

### Cài đặt Database

#### Mở Laragon nhấn `chạy`

#### truy cập url `http://localhost/phpmyadmin/` và tạo database mới đặt tên là `englishdictionary`

### Cài đặt dictionary-server

#### Gõ các lệnh:

### `cp .env.example .env`

Xóa đoạn mã này:

```
# docker
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=englishdictionary
DB_USERNAME=huy
DB_PASSWORD=huy
```

Thay đổi code này:

```
# local
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=englishdictionary
DB_USERNAME=root
DB_PASSWORD=
```

### vào `.env` vừa tạo sửa `DB_DATABASE=englishdictionary`

### Gõ lệnh `composer install` nếu không được thì gõ `composer update`

### Gõ lệnh `php artisan key:generate`

### Gõ lệnh `php artisan migrate:fresh --seed`

### Để chạy dự án `php artisan serve`

### Docs API

`http://127.0.0.1:8000/api/docs`
