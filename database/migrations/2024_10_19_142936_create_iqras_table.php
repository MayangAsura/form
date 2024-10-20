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
            $table->string('address', length: 100);
            $table->string('is_commit', 1)->default('0');
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
