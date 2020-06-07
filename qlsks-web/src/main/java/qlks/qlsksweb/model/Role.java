package qlks.qlsksweb.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class Role {
	private int roleCode;
	private String roleName;
	private java.sql.Timestamp createDate;
	private java.sql.Timestamp lastUpdUser;

	public Role(int roleCode, String roleName, Timestamp createDate, Timestamp lastUpdUser) {
		super();
		this.roleCode = roleCode;
		this.roleName = roleName;
		this.createDate = createDate;
		this.lastUpdUser = lastUpdUser;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "role_code", nullable = false)
	public int getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(int roleCode) {
		this.roleCode = roleCode;
	}

	@Column(name = "role_name", nullable = false)
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	@Column(name = "create_date", nullable = true)
	public java.sql.Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(java.sql.Timestamp createDate) {
		this.createDate = createDate;
	}

	@Column(name = "last_upd_user", nullable = true)
	public java.sql.Timestamp getLastUpdUser() {
		return lastUpdUser;
	}

	public void setLastUpdUser(java.sql.Timestamp lastUpdUser) {
		this.lastUpdUser = lastUpdUser;
	}

	@Override
	public String toString() {
		return "Role [roleCode=" + roleCode + ", roleName=" + roleName + ", createDate=" + createDate + ", lastUpdUser="
				+ lastUpdUser + "]";
	}

}
