package qlks.qlsksweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qlks.qlsksweb.model.User;
import qlks.qlsksweb.repository.UserRepository;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class UserController {
	@Autowired UserRepository userRepository;
	 @PostMapping("/getUser")
	    public List<User> getAllEmployees() {
	        return userRepository.findAll();
	    }

}
