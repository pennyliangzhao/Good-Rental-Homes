<?php

namespace App\Http\Controllers;

use App\Models\LandlordSurvey;
use App\Models\TenantSurvey;
use Illuminate\Http\Request;

class TSController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $items = TenantSurvey::all();
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $item = new TenantSurvey([
            'landlord' => $request->get('landlord'),
            'tenant' => $request->get('tenant'),
            'property' => $request->get('property'),
            'start_date' => $request->get('start_date'),
            'end_date' => $request->get('end_date'),
            'rent_on_time' => $request->get('rent_on_time'),
            'dwelling_tidiness' => $request->get('dwelling_tidiness'),
            'grounds_tidiness' => $request->get('grounds_tidiness'),
            'considerate' => $request->get('considerate'),
            'overall_rating' => $request->get('overall_rating'),
            'overall_comment' => $request->get('overall_comment'),
            'anonymous' => $request->get('anonymous'),
            'contact' => $request->get('contact'),
//            'agency' => $request->get('agency'),
//            'agency_name' => $request->get('agency_name'),

        ]);
        $item->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $item = TenantSurvey::find($id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $item = TenantSurvey::find($id);
        $item->delete();

        return response()->json('Successfully Deleted');
    }
}
