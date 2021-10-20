<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\Form_submissions;
use Illuminate\Http\Request;

class FormSubmissionsController extends Controller
{
    public function store(Request $request)
    {

        $fields = $request->validate([

            'form_id'=> 'required|string',
            'from_data'=> 'required|array',
        ]);

        $form = Form::findOrFail($fields['form_id']);

        $formSubmit = Form_submissions::create([
            'form_id' => $fields['form_id'],
            'from_data' => $fields['from_data']
        ]);
        $submissions = $form->submissions;
        $form->submissions = $submissions +1;
        $form->save();
        return response($formSubmit,201);
    }
}
