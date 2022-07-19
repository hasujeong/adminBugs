package com.diquest.admin.main.domain;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:serverlist.properties")
public class PropEntity {
	
	@Value("${diver.host}")
    String dhost;
	
	@Value("${diver.ip}")
    String dip;
	
	@Value("${diver.port}")
    String dport;
	
	@Value("${diver.alias}")
    String dalias;
	
	@Value("${rest.url}")
    String rurl;
	
	@Value("${rest.test}")
    String rtest;
	
	@Value("${collection.name}")
    String colname;
	
	@Value("${collection.info}")
    String colinfo;
	
	public String getRtest() {
		return rtest;
	}

	public void setRtest(String rtest) {
		this.rtest = rtest;
	}

	public String getDhost() {
		return dhost;
	}

	public void setDhost(String dhost) {
		this.dhost = dhost;
	}

	public String getDip() {
		return dip;
	}

	public void setDip(String dip) {
		this.dip = dip;
	}

	public String getDport() {
		return dport;
	}

	public void setDport(String dport) {
		this.dport = dport;
	}

	public String getDalias() {
		return dalias;
	}

	public void setDalias(String dalias) {
		this.dalias = dalias;
	}
	
	public String getRurl() {
		return rurl;
	}

	public void setRurl(String rurl) {
		this.rurl = rurl;
	}

	public String getColname() {
		return colname;
	}

	public void setColname(String colname) {
		this.colname = colname;
	}

	public String getColinfo() {
		return colinfo;
	}

	public void setColinfo(String colinfo) {
		this.colinfo = colinfo;
	}
		
}
