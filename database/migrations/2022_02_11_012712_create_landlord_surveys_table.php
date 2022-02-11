<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('landlord_surveys', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('tenant');
            $table->string('property');
            $table->string('start_date');
            $table->string('end_date');
            $table->integer('communication');
            $table->integer('discretion');
            $table->integer('responsiveness');
            $table->integer('compliance');
            $table->integer('overall_rating');
            $table->string('overall_comment');
            $table->boolean('anonymous');
            $table->boolean('contact');
            $table->boolean('agency');
            $table->string('agency_name');



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('landlord_surveys');
    }
};
