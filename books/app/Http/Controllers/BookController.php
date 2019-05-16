<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Books;

class BookController extends Controller
{
    public function addBook(Request $request){
		$books = new Books([
			'title' => $request->get('title'),
			'author' => $request->get('author')
		]);
		$books->save();
		return response()->json('successfully added the book');
	}
}
