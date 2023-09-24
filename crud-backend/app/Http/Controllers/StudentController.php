<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class StudentController extends Controller
{

    protected Student $student;
    public function __construct(){
        $this->student = new Student();

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->student->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|min:5|max:20',
            'email' => 'unique:students,email,'.$this->student.'id',
            'phone'=>'digits:11|unique:students,phone,'.$this->student.'id'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages()
            ],422);
        }else{
            return $this->student->create($request->all());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $this->student->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = $this->student->find($id);
        $student->update($request->all());
        return $student;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = $this->student->find($id);
        return $student->delete();
    }
}
