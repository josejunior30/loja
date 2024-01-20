package com.example.lojinha.DTO;

import com.example.lojinha.entities.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {

}
