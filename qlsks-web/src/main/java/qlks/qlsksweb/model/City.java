package qlks.qlsksweb.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	private String cityCode;
	private String cityName;
	private String cityPic;
	private java.sql.Timestamp createDate;
	private java.sql.Timestamp lastUpdDate;

	public City(String cityCode, String cityName, String cityPic, Timestamp createDate, Timestamp lastUpdDate) {
		super();
		this.cityCode = cityCode;
		this.cityName = cityName;
		this.cityPic = cityPic;
		this.createDate = createDate;
		this.lastUpdDate = lastUpdDate;
	}

	@Id
	@Column(name = "city_code", nullable = false)
	public String getCityCode() {
		return cityCode;
	}

	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}

	@Column(name = "city_name", nullable = false)
	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	@Column(name = "cityPic", nullable = false)
	public String getCityPic() {
		return cityPic;
	}

	public void setCityPic(String cityPic) {
		this.cityPic = cityPic;
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
		return "City [cityCode=" + cityCode + ", cityName=" + cityName + ", cityPic=" + cityPic + ", createDate="
				+ createDate + ", lastUpdDate=" + lastUpdDate + "]";
	}

}
