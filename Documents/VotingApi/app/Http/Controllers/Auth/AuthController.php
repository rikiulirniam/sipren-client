<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function index(){
        $user = Auth::user();
        return response()->json($user);
    }

    public function register(Request $request){
        $user = $request->all();
        $validator = Validator::make($user, [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $createUser = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'email_verified_at' => now(),
            'password' => Hash::make($request->password),
            'remember_token' => Str::random(60),
        ]);

        return response()->json($createUser);       
    }
    
    public function login(Request $request){

        if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])) {
            $user = Auth::user();
            $newToken = Str::random(60);
            $user->token = $user->createToken($newToken)->plainTextToken;
            return response()->json($user, 200);
        }        
        
        return response()->json([
            'message' => 'Invalid username or password'
        ], 401);
    }

    public function logout(){
        if(!Auth::guard('api')->check()){
            return response()->json([
                'message' => 'Invalid Token',
            ]);
        }
        Auth::guard('api')->user()->deleteToken();
        return response()->json([
            'message' => 'Logout Success',
        ]);
        
    }

}
            