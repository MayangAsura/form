<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreThalibRequest;
use App\Models\Thalib;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;

class ThalibController extends Controller
{
    function index(){

        $thalibs = Thalib::all()->toArray();
        return array_reverse($thalibs);
        
    }

    function store(StoreThalibRequest $request){

        $request->validated();

        $thalibs = new Thalib([
            'full_name' => $request->input('full_name'),
            'gender'=> $request->input('gender'),
            'phone_number'=> $request->input('phone_number'),
            'email' => $request->input('email'),
            'age' => $request->input('age'),
            'address' => $request->input('address')
        ]);

        $thalibs->save();

        $grup_url = '';

        $thalibs['gender']==1? $grup_url = 'https://google.com' : $grup_url = 'https://muslim.or.id'; 

        return response()->json(
            [
                'code' => 200,
                'message' => 'Jazaakumullaahu khayran telah bergabung bersama SKAI. Baarakallahu fiikum.',
                'data' => [
                    'gender' => $thalibs['gender'],
                    'grup_url' => $grup_url
                ]
            ]
        );
    }
}
