package com.example.lojinha.DTO;

import java.io.Serializable;
import java.util.Objects;

import com.example.lojinha.entities.UserRole;
import com.example.lojinha.entities.Usuario;

public class UsuarioDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String login;
	private String password;
	private UserRole role;
	
	public UsuarioDTO() {
			
	}

	public UsuarioDTO(Long id, String name, String login, String password, UserRole role ) {
		super();
		this.id = id;
		this.name=name;
		
		this.login = login;
		this.password = password;
		this.role = role;
	}
	public UsuarioDTO(Usuario entity) {
		this.id= entity.getId();
		this.name= entity.getName();
		this.login = entity.getLogin();
		this.password = entity.getPassword();
		this.role= entity.getRole();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UsuarioDTO other = (UsuarioDTO) obj;
		return Objects.equals(id, other.id);
	}
	

}
