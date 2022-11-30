### ClusterIP Service - 외부 접근 불가능

외부 접근이 불가능하므로, 컨테이너를 실행시켜서 내부에서 직접 curl을 날린다. 
접근 주소는 cluster-ip이다.
```
$ kubectl apply -f curl-pod.yaml
$ kubectl expose deployment nginx-deployment -n lab06 --name=nginx-service
$ kubectl get services -n lab06

(curl-pod) $ curl http://172.16.255.87:8000
```

### NodePort Service - 외부 접근 가능
클러스터 외부에서도 접속이 가능하다. 
접근 주소는 외부로 노출된 클러스터 노드의 IP이다. port 번호는 30000 ≤ nodePort ≤ 32767 범위 내에서 설정 가능하다.
```
$ kubectl apply -f service-nodeport.yaml

$ curl http://43.133.86.74:30123
```