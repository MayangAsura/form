<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreK_iqraRequest;
use App\Models\K_iqra;
use Illuminate\Http\Request;

class K_iqraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreK_iqraRequest $request)
    {
        $request->validated();

        
        $iqras = new K_iqra([
            'full_name' => $request->input('full_name'),
            'gender'=> $request->input('gender'),
            'phone'=> $request->input('phone'),
            'address' => $request->input('address')
            // 'is_commit' => $request->input(key: 'is_commit')
        ]);
        
        // var_dump($iqras);
        $wa_link = "https://api.whatsapp.com/send?phone=6281265557612&text=bismillah%2C%20Assalamu'alaikum%2C%20Alhamdulillah%20ana%20%5BFulan%5D%20sudah%20mendaftar%20dan%20ingin%20konfirmasi%20biaya%20pendidikan.%20Jazaakumullahu%20khayran.";

        // https://api.whatsapp.com/send?phone=6281265557612&text=bismillah%2C%20Assalamu'alaikum%2C%20Alhamdulillah%20ana%20%5BFulan%5D%20sudah%20membayar%20biaya%20pendidikan%2C%20berikut%20bukti%20transfer.%20Jazaakumullahu%20khayran.
        if($iqras->save()){

            
            return response()->json(
                [
                    'code' => 200,
                    'message' => 'Jazaakumullahu khayran, Antum telah bergabung di kelas IQRA Ikhwan. Semoga mendapatkan ilmu yang bermanfaat.',
                    'data' => [
                        // 'is_commit' => $iqras['is_commit'],
                        'wa_link' => $wa_link
                    ]
                ]
            );

        }else{
            return response()->json(
                [
                    'code' => 500,
                    'message' => 'Tidak berhasil',
                    'data' => [
                        // 'is_commit' => $iqras['is_commit'],
                        'wa_link' => ""
                    ]
                ]
            );
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(K_iqraController $k_iqraController)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(K_iqraController $k_iqraController)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, K_iqraController $k_iqraController)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(K_iqraController $k_iqraController)
    {
        //
    }
}
