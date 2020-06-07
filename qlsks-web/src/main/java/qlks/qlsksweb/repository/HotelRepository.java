package qlks.qlsksweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qlks.qlsksweb.model.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

}
