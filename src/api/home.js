import {http2} from "@/utils/http";

//获取视频资源接口
export function getVideoList() {
    return http2.get();
}