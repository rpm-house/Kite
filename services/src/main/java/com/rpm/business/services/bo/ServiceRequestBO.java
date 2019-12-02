package com.rpm.business.services.bo;

import java.util.Collection;

import com.rpm.business.services.vo.ServiceRequestVO;


public interface ServiceRequestBO {

	public void create(ServiceRequestVO vo);
	
	public Collection<ServiceRequestVO> getAllServiceRequests();
}
