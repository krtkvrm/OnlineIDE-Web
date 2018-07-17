echo "Connecting to Cloud"

ssh ubuntu@ec2-52-206-3-72.compute-1.amazonaws.com "cd /home/ubuntu/openoj/ ; rm -Rf webapp/ ; git clone https://github.com/vkartik97/OnlineIDE-Web.git webapp"

echo "Deployment Completed"