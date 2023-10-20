@extends('layouts.app')
@section('content')
<div id="app">
   <article-component></article-component>
   <hr>
   <comments-component></comments-component>
</div>

@endsection
@section('vue')
     @vite(['resources/js/app.js']) 
@endsection