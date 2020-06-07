package qlks.qlsksweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qlks.qlsksweb.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
