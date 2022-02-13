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
        Schema::create('Tenant_surveys', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('landlord');
            $table->string('tenant');
            $table->string('property');
            $table->string('start_date');
            $table->string('end_date');
            $table->integer('rent_on_time');
            $table->integer('dwelling_tidiness');
            $table->integer('grounds_tidiness');
            $table->integer('considerate');
            $table->integer('overall_rating');
            $table->string('overall_comment');
            $table->boolean('anonymous');
            $table->boolean('contact');
//            $table->boolean('agency');
//            $table->string('agency_name');



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tenant_surveys');
    }
};
