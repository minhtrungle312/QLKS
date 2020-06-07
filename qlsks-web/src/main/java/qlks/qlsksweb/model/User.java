package qlks.qlsksweb.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	private String username;
	private String fullname;
	private String password;
	private String email;
	private java.sql.Timestamp createDate;
	private java.sql.Timestamp lastUpdDate;

	public User(String username, String fullname, String password, String email, Timestamp createDate,
			Timestamp lastUpdDate) {
		super();
		this.username = username;
		this.fullname = fullname;
		this.password = password;
		this.email = email;
		this.createDate = createDate;
		this.lastUpdDate = lastUpdDate;
	}

	@Id
	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "fullname", nullable = false)
	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "email", nullable = true)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "create_date", nullable = true)
	public java.sql.Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(java.sql.Timestamp createDate) {
		this.createDate = createDate;
	}

	@Column(name = "last_upd_date", nullable = true)
	public java.sql.Timestamp getLastUpdDate() {
		return lastUpdDate;
	}

	public void setLastUpdDate(java.sql.Timestamp lastUpdDate) {
		this.lastUpdDate = lastUpdDate;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", fullname=" + fullname + ", password=" + password + ", email=" + email
				+ ", create_date=" + createDate + ", last_upd_date=" + lastUpdDate + "]";
	}

}
