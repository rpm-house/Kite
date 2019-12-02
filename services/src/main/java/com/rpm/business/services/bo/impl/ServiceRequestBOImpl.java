package com.rpm.business.services.bo.impl;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.stereotype.Service;

import com.rpm.business.services.bo.ServiceRequestBO;
import com.rpm.business.services.vo.ServiceRequestVO;

@Service
public class ServiceRequestBOImpl implements ServiceRequestBO{

	public void create(ServiceRequestVO vo) {
		
	}

	public Collection<ServiceRequestVO> getAllServiceRequests() {
		
		ServiceRequestVO vo = new ServiceRequestVO();
		vo.setServiceRequestId(12345);
		vo.setRequestName("Plumbing");
		vo.setRequestCategory("Repair");
		vo.setRequestorName("XZ");
		Collection<ServiceRequestVO> reqList = new ArrayList<ServiceRequestVO>();
		reqList.add(vo);
		return reqList;
	}
	
	

}
