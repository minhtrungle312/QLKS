package qlks.qlsksweb.model;

import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "room")
public class Room {
	private String hotelCode;
	private String roomCode;
	private String roomName;
	private BigDecimal price;
	private Boolean isBooking;
	private String roomType;
	private java.sql.Timestamp createDate;
	private java.sql.Timestamp lastUpdDate;

	public Room(String hotelCode, String roomCode, String roomName, BigDecimal price, Boolean isBooking,
			String roomType, Timestamp createDate, Timestamp lastUpdDate) {
		super();
		this.hotelCode = hotelCode;
		this.roomCode = roomCode;
		this.roomName = roomName;
		this.price = price;
		this.isBooking = isBooking;
		this.roomType = roomType;
		this.createDate = createDate;
		this.lastUpdDate = lastUpdDate;
	}
	@Column(name = "hotel_code", nullable = false)
	public String getHotelCode() {
		return hotelCode;
	}

	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
	}

	@Id
	@Column(name = "room_code", nullable = false)
	public String getRoomCode() {
		return roomCode;
	}

	public void setRoomCode(String roomCode) {
		this.roomCode = roomCode;
	}

	@Column(name = "room_name", nullable = false)
	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	@Column(name = "price", nullable = false)
	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	@Column(name = "is_booking", nullable = false)
	public Boolean getIsBooking() {
		return isBooking;
	}

	public void setIsBooking(Boolean isBooking) {
		this.isBooking = isBooking;
	}

	@Column(name = "room_type", nullable = false)
	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
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

	public void setLastUpdDate(java.sql.Timestamp lastUpdDate) {
		this.lastUpdDate = lastUpdDate;
	}

	@Override
	public String toString() {
		return "Room [hotelCode=" + hotelCode + ", roomCode=" + roomCode + ", roomName=" + roomName + ", price=" + price
				+ ", isBooking=" + isBooking + ", roomType=" + roomType + ", createDate=" + createDate
				+ ", lastUpdDate=" + lastUpdDate + "]";
	}

}
