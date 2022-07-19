package com.diquest.admin.main.domain;

public class ChartEntity {
	private String reg;			// 날짜
	private String cnt;			// 검색량
	private String beforedate;
	private String nowdate;
		
	public String getBeforedate() {
		return beforedate;
	}
	public void setBeforedate(String beforedate) {
		this.beforedate = beforedate;
	}
	public String getNowdate() {
		return nowdate;
	}
	public void setNowdate(String nowdate) {
		this.nowdate = nowdate;
	}
	public String getReg() {
		return reg;
	}
	public void setReg(String reg) {
		this.reg = reg;
	}
	public String getCnt() {
		return cnt;
	}
	public void setCnt(String cnt) {
		this.cnt = cnt;
	}
	
}
