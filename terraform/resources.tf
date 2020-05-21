resource "aws_rds_cluster" "default" {
  cluster_identifier = "password-rotation-demo-rds"

  engine = var.rds_engine
  database_name = var.rds_database_name
  master_username = var.rds_master_username
  master_password = var.rds_master_password
  skip_final_snapshot = true
}

resource "aws_rds_cluster_instance" "rds_instance" {
  cluster_identifier = aws_rds_cluster.default.id
  identifier_prefix = "password-rotation-demo"

  engine = var.rds_engine
  instance_class = "db.t3.medium"
  count = 1
  publicly_accessible = true
}
