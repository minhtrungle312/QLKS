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
@Table(name = "invoice")
public class Invoice {
	private int invoiceNo;
	private String username;
	private String hotelCode;
	private String roomCode;
	private java.sql.Timestamp hireDate;
	private java.sql.Timestamp returnDate;
	private BigDecimal payMent;

	public Invoice(int invoiceNo, String username, String hotelCode, String roomCode, Timestamp hireDate,
			Timestamp returnDate, BigDecimal payMent) {
		super();
		this.invoiceNo = invoiceNo;
		this.username = username;
		this.hotelCode = hotelCode;
		this.roomCode = roomCode;
		this.hireDate = hireDate;
		this.returnDate = returnDate;
		this.payMent = payMent;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "invoice_no", nullable = false)
	public int getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(int invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	@Column(name = "hotel_code", nullable = false)
	public String getHotelCode() {
		return hotelCode;
	}

	public void setHotelCode(String hotelCode) {
		this.hotelCode = hotelCode;
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

	@Override
	public String toString() {
		return "Invoice [invoiceNo=" + invoiceNo + ", username=" + username + ", hotelCode=" + hotelCode + ", roomCode="
				+ roomCode + ", hireDate=" + hireDate + ", returnDate=" + returnDate + ", payMent=" + payMent + "]";
	}

}
