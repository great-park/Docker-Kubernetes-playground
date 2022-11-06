## Docker run

### ping Container
```bash
docker run -itd -p 5000:5000 --name pingContainer 이미지이름:태그
```

### pong Container
```bash
docker run -itd -p 5001:5001 --name pongContainer 이미지이름:태그
```

## Docker network 연결

```bash
docker create network ping-pong
```
```bash
docker network connect ping-pong pingContainer
docker network connect ping-pong pongContainer
```

### inspect로 연결 확인
```bash
docker network inspect ping-pong
```
