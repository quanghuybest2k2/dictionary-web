<?php

namespace App\Repositories\LoveRepositoryService;

use Illuminate\Database\Eloquent\Model;

interface ILoveRepository
{
    public function checkIfExistByType(Model $model, $english, $userId);
    // =======================================================================
    public function FindLoveByWordAndEnglish($english, $user_id);
    public function deleteAllFavorite($user_id);
    public function TotalLoveItemOfUser($user_id): int;
    // Vocabulary
    public function displayLoveVocabulary($user_id);
    public function displayLoveVocabularyByWord($english, $user_id);
    public function createLoveVocabulary(array $data);
    public function deleteLoveVocabulary($english, $user_id);
    public function sortByVocabulary($user_id);
    public function updateVocabulary($id, $user_id, $Note);
    // Text
    public function displayLoveText($user_id);
    public function displayLoveTextByWord($english, $user_id);
    public function createLoveTexts(array $data);
    public function deleteLoveText($english, $user_id);
    public function sortByText($user_id);
    public function updateText($id, $user_id, $Note);
}
