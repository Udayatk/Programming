import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.MapReduceBase;
import org.apache.hadoop.mapred.Mapper;
import org.apache.hadoop.mapred.OutputCollector;
import org.apache.hadoop.mapred.Reporter;


public class wordmapper extends MapReduceBase implements Mapper<LongWritable,Text,Text,IntWritable>
{
	public void map(LongWritable key, Text value, OutputCollector<Text, IntWritable> output, Reporter r) throws IOException
	{
		String s =value.toString();
		for(String word:s.split(" "))
		{
			if(word.length()>0)
			{
				output.collect(new Text(word), new IntWritable(1));
			}
		}
	}
}
