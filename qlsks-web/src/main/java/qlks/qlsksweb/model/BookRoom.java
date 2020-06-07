package qlks.qlsksweb.model;

import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book_room")
public class BookRoom {
	private int bookNo;
	private String username;
	private String roomCode;
	private java.sql.Timestamp hireDate;
	private java.sql.Timestamp returnDate;
	private BigDecimal payMent;
	private boolean isCheckout;

	public BookRoom(int bookNo, String username, String roomCode, Timestamp hireDate, Timestamp returnDate,
			BigDecimal payMent, boolean isCheckout) {
		super();
		this.bookNo = bookNo;
		this.username = username;
		this.roomCode = roomCode;
		this.hireDate = hireDate;
		this.returnDate = returnDate;
		this.payMent = payMent;
		this.isCheckout = isCheckout;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "book_no", nullable = false)
	public int getBookNo() {
		return bookNo;
	}

	public void setBookNo(int bookNo) {
		this.bookNo = bookNo;
	}

	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Column(name = "room_code", nullable = false)
	public String getRoomCode() {
		return roomCode;
	}

	public void setRoomCode(String roomCode) {
		this.roomCode = roomCode;
	}

	@Column(name = "hire_date", nullable = false)
	public java.sql.Timestamp getHireDate() {
		return hireDate;
	}

	public void setHireDate(java.sql.Timestamp hireDate) {
		this.hireDate = hireDate;
	}

	@Column(name = "return_date", nullable = false)
	public java.sql.Timestamp getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(java.sql.Timestamp returnDate) {
		this.returnDate = returnDate;
	}

	@Column(name = "pay_ment", nullable = false)
	public BigDecimal getPayMent() {
		return payMent;
	}

	public void setPayMent(BigDecimal payMent) {
		this.payMent = payMent;
	}

	@Column(name = "is_check_out", nullable = false)
	public boolean isCheckout() {
		return isCheckout;
	}

	public void setCheckout(boolean isCheckout) {
		this.isCheckout = isCheckout;
	}

	@Override
	public String toString() {
		return "BookRoom [bookNo=" + bookNo + ", username=" + username + ", roomCode=" + roomCode + ", hireDate="
				+ hireDate + ", returnDate=" + returnDate + ", payMent=" + payMent + ", isCheckout=" + isCheckout + "]";
	}

}
