package com.rpm.business.services.vo;

import java.io.Serializable;

public class ServiceRequestVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8043086780275140271L;

	private long serviceRequestId;
	
	private String requestCategory;
	
	private String requestName;
	
	private String requestorName;
	
	private String requestOwnerName;
	
	private String requestDescription;
	
	private String requestWorkTime;
	
	private String createdTime;
	
	private String solvedTime;
	
	private String requestStatus;

	public long getServiceRequestId() {
		return serviceRequestId;
	}

	public void setServiceRequestId(long serviceRequestId) {
		this.serviceRequestId = serviceRequestId;
	}

	public String getRequestCategory() {
		return requestCategory;
	}

	public void setRequestCategory(String requestCategory) {
		this.requestCategory = requestCategory;
	}

	public String getRequestName() {
		return requestName;
	}

	public void setRequestName(String requestName) {
		this.requestName = requestName;
	}

	public String getRequestorName() {
		return requestorName;
	}

	public void setRequestorName(String requestorName) {
		this.requestorName = requestorName;
	}

	public String getRequestOwnerName() {
		return requestOwnerName;
	}

	public void setRequestOwnerName(String requestOwnerName) {
		this.requestOwnerName = requestOwnerName;
	}

	public String getRequestDescription() {
		return requestDescription;
	}

	public void setRequestDescription(String requestDescription) {
		this.requestDescription = requestDescription;
	}

	public String getRequestWorkTime() {
		return requestWorkTime;
	}

	public void setRequestWorkTime(String requestWorkTime) {
		this.requestWorkTime = requestWorkTime;
	}

	public String getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(String createdTime) {
		this.createdTime = createdTime;
	}

	public String getSolvedTime() {
		return solvedTime;
	}

	public void setSolvedTime(String solvedTime) {
		this.solvedTime = solvedTime;
	}

	public String getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}
	
	
}
