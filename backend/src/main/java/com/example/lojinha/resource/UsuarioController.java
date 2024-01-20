package com.example.lojinha.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.example.lojinha.DTO.UsuarioDTO;

import com.example.lojinha.service.UsuarioService;


import jakarta.validation.Valid;


@RestController
@RequestMapping(value="/user")
@CrossOrigin("http://localhost:4200")
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	@GetMapping

	public ResponseEntity<List<UsuarioDTO>>findAll(){
		List<UsuarioDTO>list  = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	@PostMapping
	public ResponseEntity<UsuarioDTO> insert(@RequestBody @Valid UsuarioDTO dto){
		UsuarioDTO entity = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(entity.getId()).toUri();
		return ResponseEntity.created(uri).body(entity);
	}
	@PutMapping(value="/{id}")
	public ResponseEntity<UsuarioDTO> update(@Valid @PathVariable Long id, @Valid @RequestBody UsuarioDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	


}
