<?php

namespace App\Http\Controllers;

use App\Models\Polls;
use App\Http\Requests\StorePollsRequest;
use App\Http\Requests\UpdatePollsRequest;

class PollsController extends Controller
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
    public function store(StorePollsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Polls $polls)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Polls $polls)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePollsRequest $request, Polls $polls)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Polls $polls)
    {
        //
    }
}
