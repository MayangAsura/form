<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('thalibs', function (Blueprint $table) {
            $table->id();
            $table->string("full_name");
            $table->string("gender", 10);
            $table->string("phone", 50);
            $table->string('email');
            $table->integer("age")->nullable();
            $table->text("address");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thalibs');
    }
};
