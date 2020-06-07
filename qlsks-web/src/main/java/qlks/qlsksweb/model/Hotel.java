package qlks.qlsksweb.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hotel")
public class Hotel {
	private String hotelCode;
	private String hotelName;
	private String hotelPic;
	private String hotelAddress;
	private String phoneNumber;
	private String email;
	private java.sql.Timestamp createDate;
	private java.sql.Timestamp lastUpdDate;
	private String cityCode;

	public Hotel(String hotelCode, String hotelName, String hotelPic, String hotelAddress, String phoneNumber,
			String email, Timestamp createDate, Timestamp lastUpdDate, String cityCode) {
		super();
		this.hotelCode = hotelCode;
		this.hotelName = hotelName;
		this.hotelPic = hotelPic;
		this.hotelAddress = hotelAddress;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.createDate = createDate;
		this.lastUpdDate = lastUpdDate;
		this.cityCode = cityCode;
	}

	@Id
	@Column(name = "hotel_code", nullable = false)
	public String getHotelCode() {
		return hotelCode;
	}

	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
	}

	@Column(name = "hotel_name", nullable = false)
	public String getHotelName() {
		return hotelName;
	}

	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	@Column(name = "hotel_pic", nullable = false)
	public String getHotelPic() {
		return hotelPic;
	}

	public void setHotelPic(String hotelPic) {
		this.hotelPic = hotelPic;
	}

	@Column(name = "hotel_addr", nullable = false)
	public String getHotelAddress() {
		return hotelAddress;
	}

	public void setHotelAddress(String hotelAddress) {
		this.hotelAddress = hotelAddress;
	}

	@Column(name = "hotel_phone_number", nullable = false)
	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Column(name = "hotel_email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "create_date", nullable = false)
	public java.sql.Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(java.sql.Timestamp createDate) {
		this.createDate = createDate;
	}

	@Column(name = "last_upd_date", nullable = false)
	public java.sql.Timestamp getLastUpdDate() {
		return lastUpdDate;
	}
	
	@Column(name = "city_code", nullable = false)
	public String getCityCode() {
		return cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	public void setLastUpdDate(java.sql.Timestamp lastUpdDate) {
		this.lastUpdDate = lastUpdDate;
	}

	@Override
	public String toString() {
		return "Hotel [hotelCode=" + hotelCode + ", hotelName=" + hotelName + ", hotelPic=" + hotelPic
				+ ", hotelAddress=" + hotelAddress + ", phoneNumber=" + phoneNumber + ", email=" + email
				+ ", createDate=" + createDate + ", lastUpdDate=" + lastUpdDate + ", cityCode=" + cityCode + "]";
	}

	

}
