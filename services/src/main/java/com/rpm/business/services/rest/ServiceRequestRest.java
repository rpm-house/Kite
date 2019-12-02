package com.rpm.business.services.rest;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rpm.business.services.bo.ServiceRequestBO;
import com.rpm.business.services.vo.ServiceRequestVO;

@RestController
@RequestMapping(value = "/api/serviceRequest")
@CrossOrigin(origins = "http://localhost:8090")
public class ServiceRequestRest {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	
	@Autowired
	ServiceRequestBO bo;
	
	/**
	 * @param vo
	 * @return String
	 */
	@PostMapping(value = "/create")
	public String create(@RequestBody ServiceRequestVO vo) {
		logger.debug("Saving Request.");
		bo.create(vo);
		return "Request created.";
	}
	
	
	@GetMapping(value = "/getall")
	public Collection<ServiceRequestVO> getAll() {
		logger.debug("Getting all requests.");
		return bo.getAllServiceRequests();
	}
}
