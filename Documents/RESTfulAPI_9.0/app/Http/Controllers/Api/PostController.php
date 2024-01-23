<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Post;

use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index(){
        $posts = Post::latest()->paginate(5);

        return new PostResource(true, 'List Data Post', $posts);
    }

    public function store(Request $request){
        

        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:img,jpeg,jpg,png,gif,svg|max:2048',
            'title' => 'required',
            'content' => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $image = $request->file('image');
        $image->storeAs('public/post', $image->hashName());
            
        // $post = Post::all()->toArray();
        // return response()->json([
        //     'image' => $image->hashName(),
        //     'title' => $request->$post->title,
        //     'content' => $request->$post->content,
        // ], 200);

        $post = Post::create([
            "image" => $image->hashName(),
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return new PostResource(true, "Data Successfully Created", $post);
    }

    public function show(Post $post){
        return new PostResource(true, "Data Showed", $post);
    }

    public function update(Request $request, Post $post){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'content' => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        
        if($request->hasFile('image')){

            $image = $request->file('image');
            $image->storeAs('public/images', $image->hashName());

            Storage::delete('public/images' . $post->image);

            $post->update([
                'image' => $image->hashName(),
                'title' => $request->title,
                'content' => $request->content,
            ]);

        } else{
            $post->update([
                'title' => $request->title,
                'content' => $request->content,
            ]);
        }

        return new PostResource(true, 'Data Updated!', $post);
    }

    public function destroy(Post $post){
        Storage::delete('public/post/' . $post->image);

        $post->delete();

        return new PostResource(true,'Data sucessfully deleted.',NULL);
    }
}