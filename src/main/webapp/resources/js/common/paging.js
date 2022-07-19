/**
 * 페이징 처리 JS
 */
 var pagingUtil = {
    pagingView: function (currentPageNo, pageSize, totalCount, targetFunction) {
        var pageNo = parseInt(currentPageNo); // 현재 페이지 번호
        var countPage = 10; // 한 화면에 출력될 페이징 개수.

        var finalPageNo = parseInt(totalCount / pageSize);  //마지막 페이지 번호
        var strPaging = "";
        var targetFunction = (targetFunction == null || targetFunction == "") ? "pageLink" : targetFunction;

        if (totalCount % pageSize > 0) {
            finalPageNo++;
        }

        if (finalPageNo < pageNo) {
            pageNo = finalPageNo;
        }

        var startPage = Math.floor(((pageNo - 1) / countPage)) * countPage + 1;
        var endPage = startPage + countPage - 1;

        if (startPage <= 0) {
            startPage = 1;
        }
        if (endPage > finalPageNo) {
            endPage = finalPageNo;
        }	

		if(totalCount > 0) {
			strPaging += '<li class="page-item"><a class="page-link" href="javascript:'+ targetFunction + '(1);">';
			strPaging += '<span class="material-icons">keyboard_double_arrow_left</span><span class="sr-only">Previous</span></a></li>';
		}
			
        if (pageNo > 1) {
            strPaging += '<li class="page-item"><a class="page-link" href="javascript:'+ targetFunction + '(' + (pageNo - 1) +');">';
            strPaging += '<span class="material-icons">keyboard_arrow_left</span><span class="sr-only">Previous</span></a></li>';
        }

        for (var iCount = startPage; iCount <= endPage; iCount++) {
            if (iCount == pageNo) {
                strPaging += '<li class="page-item active"><a class="page-link" href="javascript:void(0);">'+ iCount +'</a></li>';
            } else {
                strPaging += '<li class="page-item"><a class="page-link" href="javascript:'+ targetFunction + '(' + iCount + ');">'+ iCount +'</a></li>';
            }
        }

        if (pageNo < finalPageNo) {
            strPaging += '<li class="page-item"><a class="page-link" href="javascript:'+ targetFunction + '(' + (pageNo + 1) +');">';
			strPaging += '<span class="material-icons">keyboard_arrow_right</span><span class="sr-only">Next</span></a></li>';
        }
        
        if(totalCount > 0) {
	        strPaging += '<li class="page-item"><a class="page-link" href="javascript:'+ targetFunction + '(' + finalPageNo +');">';
			strPaging += '<span class="material-icons">keyboard_double_arrow_right</span><span class="sr-only">Previous</span></a></li>';
		}
		
        return strPaging;
    }

    //게시글의 시작 인덱스번호
    , getStartOffset: function (currentPageNo, pageSize) {
        //      return ((currentPageNo -1) * pageSize) + 1;
        return (currentPageNo - 1) * pageSize;
    }

    //게시글의 끝 인덱스번호
    , getEndOffset: function (currentPageNo, pageSize) {
        return currentPageNo * pageSize;
    }

    //마지막 페이지 번호
    , getfinalPageNo: function (totalCount, pageSize) {
        var finalPageNo = parseInt(totalCount / pageSize);
        if (totalCount % pageSize > 0) {
            finalPageNo++;
        }
        return finalPageNo;
    }
}