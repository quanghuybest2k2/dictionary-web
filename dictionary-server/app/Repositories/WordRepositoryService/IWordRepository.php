<?php

namespace App\Repositories\WordRepositoryService;

interface IWordRepository
{
    public function getAll();
    public function getSuggest($specializationId);
    public function getRandomWord();
    public function searchByKeyword($keyword);
    public function createWord(array $data): array;
}
