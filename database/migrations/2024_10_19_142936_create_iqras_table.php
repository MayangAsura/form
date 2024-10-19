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
        Schema::create('iqras', function (Blueprint $table) {
            $table->id();
            $table->string("full_name", 255);
            $table->string("gender", 10);
            $table->string("phone", 50);
            $table->string('address', 100);
            $table->boolean('is_commit')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iqras');
    }
};
