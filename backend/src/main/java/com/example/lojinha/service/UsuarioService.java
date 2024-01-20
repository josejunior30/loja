package com.example.lojinha.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.lojinha.DTO.UsuarioDTO;
import com.example.lojinha.entities.Usuario;
import com.example.lojinha.repository.UsuarioRepository;




@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Transactional(readOnly = true)
	public List<UsuarioDTO> findAll(){
		 List<Usuario>list =repository.findAll();
		 return list.stream()
	               .map(x -> new UsuarioDTO(x))
	               .collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public UsuarioDTO findById(Long Id) {
		Optional<Usuario> usuario = repository.findById(Id);
		Usuario entity = usuario.get();
		return new UsuarioDTO(entity);
	}
	
	  @Transactional(readOnly = false)
	    public UsuarioDTO insert(UsuarioDTO dto) {
	        Usuario entity = new Usuario();
	        copyDtoToEntity(dto, entity);
	        String senhaCriptografada = passwordEncoder.encode(dto.getPassword());
	        entity.setPassword(senhaCriptografada);
	        entity = repository.save(entity);
	        return new UsuarioDTO(entity);
	    }
		@Transactional(readOnly = true)
		public UsuarioDTO update(Long id, UsuarioDTO dto) {
			Usuario entity = repository.getReferenceById(id);
			entity.setLogin(dto.getLogin());
			repository.save(entity);
			return new UsuarioDTO(entity);
		}
		
	
	private void copyDtoToEntity(UsuarioDTO dto, Usuario entity) {
		entity.setLogin(dto.getLogin());
		entity.setName(dto.getName());
		entity.setPassword(dto.getPassword());
		entity.setRole(dto.getRole());
	}

	
}