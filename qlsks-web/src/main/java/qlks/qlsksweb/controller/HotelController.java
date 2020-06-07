package qlks.qlsksweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qlks.qlsksweb.model.Hotel;
import qlks.qlsksweb.repository.HotelRepository;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class HotelController {
	@Autowired HotelRepository hotelRepository;
	@PostMapping("/getAllHotel")
	public List<Hotel> getAllHotel() {
		return hotelRepository.findAll();
	}
}
