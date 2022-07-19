package com.diquest.admin.main.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.diquest.admin.main.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	MainService mainService;
	
	@RequestMapping("/")
	public String index(HttpServletRequest request) {
		String user_id = (String) request.getSession().getAttribute("user_id") == null ?  "" : (String)request.getSession().getAttribute("user_id");
		
		return "adminChart";
	}

	@RequestMapping("/adminChart")
	public String adminChart(HttpServletRequest request) {
		String user_id = (String) request.getSession().getAttribute("user_id") == null ?  "" : (String)request.getSession().getAttribute("user_id");
		
//		if(!(user_id == "" || user_id == null)) {
//			return "searchChart";
//		} else {
//			return "redirect:login";
//		}
		return "adminChart";
	}
}
